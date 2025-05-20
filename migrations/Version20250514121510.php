<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250514121510 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE user_note (user_id INT NOT NULL, note_id INT NOT NULL, INDEX IDX_B53CB6DDA76ED395 (user_id), INDEX IDX_B53CB6DD26ED0855 (note_id), PRIMARY KEY(user_id, note_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE user_note ADD CONSTRAINT FK_B53CB6DDA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE user_note ADD CONSTRAINT FK_B53CB6DD26ED0855 FOREIGN KEY (note_id) REFERENCES note (id) ON DELETE CASCADE
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE user_note DROP FOREIGN KEY FK_B53CB6DDA76ED395
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE user_note DROP FOREIGN KEY FK_B53CB6DD26ED0855
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE user_note
        SQL);
    }
}
