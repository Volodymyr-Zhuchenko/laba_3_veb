async function Search_visibl_quest(){
    let questElements = document.getElementsByClassName("quest");
    let score_quest = questElements.length;
    for(let i = 0; i < score_quest+1; i++)
    {
        let computedStyle = window.getComputedStyle(questElements[i]);
        if (computedStyle.display === "block") {
            return i+1;
        }
    }

}

async function Next_Page()
{
    let this_page = await Search_visibl_quest();
    if (!(this_page < document.getElementsByClassName("quest").length))
    {
        return;
    }
    let next_page = this_page + 1;
    let page1 = "quest"+this_page;
    let page2 = "quest"+next_page;
    document.getElementById(page1).style.display = "none"
    document.getElementById(page2).style.display = "block"
}

async function Last_Page()
{
    let this_page = await Search_visibl_quest();
    if (this_page === 1)
    {
        return;
    }
    let next_page = this_page - 1;
    let page1 = "quest"+this_page;
    let page2 = "quest"+next_page;
    document.getElementById(page1).style.display = "none"
    document.getElementById(page2).style.display = "block"



}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("but_next").addEventListener("click", Next_Page);
    document.getElementById("but_back").addEventListener("click", Last_Page);
});
