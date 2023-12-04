using System;
using McDons_Back.Model;
using McDons_Back.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;

using Trevisharp.Security.Jwt;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<EsquizofreniaContext>();
builder.Services.AddTransient<IUserService, UserService>();
builder.Services.AddTransient<IProdutoService, ProdutoService>();
builder.Services.AddSingleton<CryptoService>( p => new() {
    InternalKeySize = 24,
    UpdatePeriod = TimeSpan.FromDays(1)
});
builder.Services.AddSingleton<ISecurityService, SecurityService>();

builder.Services.AddCors(options => 
{
    options.AddPolicy("DefaultPolicy",
        policy => {
            policy
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowAnyOrigin();
        });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
