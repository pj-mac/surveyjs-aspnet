using System.Text.Json.Serialization;

namespace Survey.Web.Models;

public class Survey
{
    public int SurveyScore { get; set; }
    
    public List<string> SurveyFavoriteFeatures { get; set; }

    [JsonPropertyName("SurveyFavoriteFeatures-Comment")]
    public string SurveyFavoriteFeaturesComment { get; set; }
    
    public string SurveyComments { get; set; }
}