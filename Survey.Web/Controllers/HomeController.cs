using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Survey.Web.Models;

namespace Survey.Web.Controllers;

public class HomeController : Controller
{
    [HttpGet]
    public IActionResult Index()
    {
        return View();
    }
    
    [HttpPost]
    [ActionName("Index")]
    public IActionResult IndexPost([FromBody] Models.Survey model)
    {
        if (!ModelState.IsValid)
            BadRequest(ModelState);

        // TODO: Persist survey results (omitted for brevity)

        return Ok();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}