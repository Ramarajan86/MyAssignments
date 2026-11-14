var browserVersion = 'chrome'
function getBrowserVersion()
{
    if(browserVersion ='chrome'){
        let browserVersion='Edge'
        console.log('Browser version inside the block', browserVersion)
    }
    console.log('Browser version outside of the block and inside of the function', browserVersion)
}

getBrowserVersion();

const browserVersion1 = 'chrome'
function getBrowserVersion1()
{
    if(browserVersion1 ='chrome'){
        var browserVersion1='Edge'
        console.log('Browser version inside the block', browserVersion1)
    }
    console.log('Browser version outside of the block and inside of the function', browserVersion1)
}
console.log('Browser version outside of the block and outside of the function', browserVersion1)
getBrowserVersion1();