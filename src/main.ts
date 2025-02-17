import { Command } from "commander";
import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const program = new Command();

const createApp = async (projectName?: string) => {
  // If project name wasn't provided as argument, prompt for it
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is your project named?",
      default: projectName || "my-lofi-app",
      when: !projectName,
      validate: (input: string) => {
        if (/^([a-z@][a-z0-9-_]*)?$/i.test(input)) {
          return true;
        }
        return "Project name may only contain alphanumeric characters, hyphens, or underscores.";
      },
    },
    {
      type: "list",
      name: "template",
      message: "Which template would you like to use?",
      choices: [
        { name: "Basic + Tailwind", value: "basic-tw" },
        // { name: "Basic + Tailwind + Shadcn", value: "basic-tw-shadcn" },
      ],
    }
  ]);

  const finalProjectName = projectName || answers.projectName;
  const targetDir = path.join(process.cwd(), finalProjectName);

  // Replace the templateDir resolution
  const templateDir = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'templates', answers.template);
  
  // Add a check to ensure template directory exists
  if (!fs.existsSync(templateDir)) {
    console.error(`Template directory not found: ${templateDir}`);
    process.exit(1);
  }

  try {
    if (fs.existsSync(targetDir)) {
      const { overwrite } = await inquirer.prompt([
        {
          type: "confirm",
          name: "overwrite",
          message: `Directory ${finalProjectName} already exists. Overwrite?`,
          default: false,
        },
      ]);

      if (!overwrite) {
        console.log("Operation cancelled.");
        process.exit(1);
      }

      await fs.remove(targetDir);
    }

    // Create project directory
    await fs.ensureDir(targetDir);

    console.log(`\nCreating a new lofi app in ${targetDir}...`);
    console.log(`Using template from: ${templateDir}`);  
    
    // Copy template files
    await fs.copy(templateDir, targetDir);

    // Update package.json with project name
    const packageJsonPath = path.join(targetDir, 'package.json');
    const packageJson = await fs.readJson(packageJsonPath);
    packageJson.name = finalProjectName;
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

    console.log("\n✨ Project created successfully!");
    console.log("\nNext steps:");
    console.log(`  cd ${finalProjectName}`);
    console.log(`  npm install`);
    console.log(`  npm start`);
  } catch (error) {
    console.error("Error creating project:", error);
    console.error("Template directory:", templateDir); 
    process.exit(1);
  }
};

program
  .name("create-lofi-app")
  .description("starterkit for creating local-first apps")
  .version("1.0.0")
  .argument("[projectName]", "name of the project")
  .action(createApp);

program.parse();
