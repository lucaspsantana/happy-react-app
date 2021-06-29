import {Column, DefaultNamingStrategy, MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1605982422886 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
        name: 'images',
        columns:[
            {
                name: 'id',
                type: 'INTEGER',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'path',
                type: 'varchar'
            },
            {
                name: 'orphanage_id',
                type: 'id'
            }
        ],
        foreignKeys: [
            {
                name:'ImageOrphanage',
                columnNames:['orphanage_id'],
                referencedTableName: 'orphanages',
                referencedColumnNames: ['id'],
                onUpdate:'CASCADE',
                onDelete:'CASCADE'
             }
        ]
    }))
}
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }
}
