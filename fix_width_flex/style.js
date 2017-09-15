{
    var allImg = document.getElementById('test_block').getElementsByTagName('img');
    for (var i=0; i<allImg.length; i++)
    {


        if (allImg[i].widht != 460)
        {
            allImg[i].height = allImg[i].height*(460/allImg[i].width);
            allImg[i].width = 460;
        }
    }
}
onload = setWidth;