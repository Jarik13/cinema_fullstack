using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyFilms.Migrations
{
    /// <inheritdoc />
    public partial class M8 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Created",
                table: "Tickets",
                newName: "Book_buy_data");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Book_buy_data",
                table: "Tickets",
                newName: "Created");
        }
    }
}
