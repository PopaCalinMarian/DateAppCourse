using WebApi.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddApplicationServices(builder.Configuration);//bcs this is an extensions, we do not need the param for the services bcs it extends it
builder.Services.AddIdentityServices(builder.Configuration);
//adding the auth middleware to validate the token we just created for each user

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200","https://localhost:4200"));
//allow app to use cors on both http/s
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
