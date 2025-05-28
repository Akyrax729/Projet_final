<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250528080637 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE color (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE note ADD color_id INT DEFAULT NULL, DROP color, DROP red, DROP green, DROP blue
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE note ADD CONSTRAINT FK_CFBDFA147ADA1FB5 FOREIGN KEY (color_id) REFERENCES color (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_CFBDFA147ADA1FB5 ON note (color_id)
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE note DROP FOREIGN KEY FK_CFBDFA147ADA1FB5
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE color
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_CFBDFA147ADA1FB5 ON note
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE note ADD color VARCHAR(255) DEFAULT NULL, ADD green INT DEFAULT NULL, ADD blue INT DEFAULT NULL, CHANGE color_id red INT DEFAULT NULL
        SQL);
    }
}
