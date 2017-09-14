function setWidth()
{
    var allImg = document.getElementById('test_block').getElementsByTagName('img');
    for (var i=0; i<allImg.length; i++)
    {
        if (allImg[i].widht > 190)
        {
            allImg[i].height = allImg[i].height*(190/allImg[i].width);
            allImg[i].width = 190;
        }
        if (allImg[i].height > 140)
        {
            allImg[i].width = allImg[i].width*(140/allImg[i].height);
            allImg[i].height = 140;
        }
    }
}
onload = setWidth;