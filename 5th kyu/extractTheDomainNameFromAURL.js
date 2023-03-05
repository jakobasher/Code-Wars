function domainName(url){
  url = url.replace("http://","")
  url = url.replace("https://","")
  url = url.replace("www.","")
  return url.split(".")[0]
}
// .replace() replace term with
// .split("") returns array from string
// Double split does not work? Modify string then split
