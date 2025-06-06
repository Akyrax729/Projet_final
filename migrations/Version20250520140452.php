<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250520140452 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE tag_note (tag_id INT NOT NULL, note_id INT NOT NULL, INDEX IDX_21B245A2BAD26311 (tag_id), INDEX IDX_21B245A226ED0855 (note_id), PRIMARY KEY(tag_id, note_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tag_note ADD CONSTRAINT FK_21B245A2BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tag_note ADD CONSTRAINT FK_21B245A226ED0855 FOREIGN KEY (note_id) REFERENCES note (id) ON DELETE CASCADE
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE tag_note DROP FOREIGN KEY FK_21B245A2BAD26311
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tag_note DROP FOREIGN KEY FK_21B245A226ED0855
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE tag_note
        SQL);
    }
}
