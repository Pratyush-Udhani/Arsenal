import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';
import { prisma } from '@/server/db';

async function main() {
    const csvFilePath = path.join(__dirname, 'sample.csv')
    fs.createReadStream(csvFilePath)
    .pipe(csvParser())
    .on('data', async (row) => {
        console.log(row['name'])
        await prisma.data.create({
            data: {
                id: row['id']  as string,
                name: row['name']  as string,
                user: row['user']  as string,
                num_one: row['num_one']  as string,
                num_two: row['num_two']  as string,
                num_three: row['num_three']  as string,
                num_four: row['num_four']  as string,
                desc: row['desc']  as string,
                category: row['category']  as string,
                num_five: row['num_five']  as string
            }
        })
    })

    .on('end', async() => {
        console.log("csv parsed")
    })
}

main()
    .then(async () => {
        await prisma.$disconnect ();
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect();
        process.exit(1)
    })
