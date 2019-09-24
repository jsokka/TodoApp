using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TodoApp.Data.Migrations
{
    public partial class Removed_Task_Status_Column : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "Task");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedOn",
                table: "Task",
                nullable: false,
                defaultValue: new DateTime(2019, 9, 23, 17, 55, 53, 808, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 9, 22, 20, 33, 20, 957, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedOn",
                table: "Tag",
                nullable: false,
                defaultValue: new DateTime(2019, 9, 23, 17, 55, 53, 808, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 9, 22, 20, 33, 20, 957, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedOn",
                table: "Project",
                nullable: false,
                defaultValue: new DateTime(2019, 9, 23, 17, 55, 53, 806, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 9, 22, 20, 33, 20, 955, DateTimeKind.Local));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedOn",
                table: "Task",
                nullable: false,
                defaultValue: new DateTime(2019, 9, 22, 20, 33, 20, 957, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 9, 23, 17, 55, 53, 808, DateTimeKind.Local));

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Task",
                type: "nvarchar(50)",
                nullable: false,
                defaultValue: "New");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedOn",
                table: "Tag",
                nullable: false,
                defaultValue: new DateTime(2019, 9, 22, 20, 33, 20, 957, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 9, 23, 17, 55, 53, 808, DateTimeKind.Local));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedOn",
                table: "Project",
                nullable: false,
                defaultValue: new DateTime(2019, 9, 22, 20, 33, 20, 955, DateTimeKind.Local),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 9, 23, 17, 55, 53, 806, DateTimeKind.Local));
        }
    }
}
