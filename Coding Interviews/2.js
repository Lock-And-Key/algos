function replaceSpace(str)
{
    var newchar = '%20'
    result = str.split(' ').join(newchar);
    return result
}
