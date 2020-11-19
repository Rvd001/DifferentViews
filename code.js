

var viz;
var workbook;
var activeSheet;
var username;


username = prompt("Username");

function firstviz() {
    var containerDiv = document.getElementById("vizContainer"),
         url = "https://public.tableau.com/views/ProfitSalesPerStateinUSA_/CountryOverview"
        options = {
            hideTabs: true,
            onFirstInteractive: function ()

                {
                    workbook = viz.getWorkbook();
                    activeSheet = workbook.getActiveSheet();
                    console.log("options is working");

                }

        };

    viz = new tableau.Viz(containerDiv, url, options);
}

// Second Visualization
function secondviz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/shared/RHG755SPZ?:display_count=y&:origin=viz_share_link"
        options = {
            hideTabs: true,
            onFirstInteractive: function ()

                {
                    workbook = viz.getWorkbook();
                    activeSheet = workbook.getActiveSheet();
                    console.log("options is working");

                }
        };

    viz = new tableau.Viz(containerDiv, url, options);
}


// Swapping Viz Based on Username
function user(){
    if (username == 'Kehinde'){
        return firstviz()
    }else{
        return secondviz()
    }
}
