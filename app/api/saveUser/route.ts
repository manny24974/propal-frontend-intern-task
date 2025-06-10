import fs from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
  try {
    console.log("🔧 API route hit");
    const newUser = await req.json();
    const filePath = path.join(process.cwd(), 'public', 'users.json');

    let users = [];
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      users = JSON.parse(data);
    } catch (err) {
      users = [];   
    }

    users.push(newUser);
    await fs.writeFile(filePath, JSON.stringify(users, null, 2));
    return new Response('User saved', { status: 200 });
  } catch (error) {
    console.error('Error saving user:', error);
    return new Response('Internal Server Error', { status: 500 });
  }


}