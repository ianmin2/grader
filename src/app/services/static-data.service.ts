import { StatusCode } from './../models/StatusCode.model';
import { MimeType } from './../models/MimeType.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class StaticDataService {

private mime_types : MimeType[] = [{"extension":".abw","description":"AbiWord document","mime":"application/x-abiword"},{"extension":".arc","description":"Archive document (multiple files embedded)","mime":"application/x-freearc"},{"extension":".avi","description":"AVI: Audio Video Interleave","mime":"video/x-msvideo"},{"extension":".azw","description":"Amazon Kindle eBook format","mime":"application/vnd.amazon.ebook"},{"extension":".bin","description":"Any kind of binary data","mime":"application/octet-stream"},{"extension":".bmp","description":"Windows OS/2 Bitmap Graphics","mime":"image/bmp"},{"extension":".bz","description":"BZip archive","mime":"application/x-bzip"},{"extension":".bz2","description":"BZip2 archive","mime":"application/x-bzip2"},{"extension":".csh","description":"C-Shell script","mime":"application/x-csh"},{"extension":".css","description":"Cascading Style Sheets (CSS)","mime":"text/css"},{"extension":".csv","description":"Comma-separated values (CSV)","mime":"text/csv"},{"extension":".doc","description":"Microsoft Word","mime":"application/msword"},{"extension":".docx","description":"Microsoft Word (OpenXML)","mime":"application/vnd.openxmlformats-officedocument.wordprocessingml.document"},{"extension":".eot","description":"MS Embedded OpenType fonts","mime":"application/vnd.ms-fontobject"},{"extension":".epub","description":"Electronic publication (EPUB)","mime":"application/epub+zip"},{"extension":".gz","description":"GZip Compressed Archive","mime":"application/gzip"},{"extension":".gif","description":"Graphics Interchange Format (GIF)","mime":"image/gif"},{"extension":".html","description":"HyperText Markup Language (HTML)","mime":"text/html"},{"extension":".ico","description":"Icon format","mime":"image/vnd.microsoft.icon"},{"extension":".ics","description":"iCalendar format","mime":"text/calendar"},{"extension":".jar","description":"Java Archive (JAR)","mime":"application/java-archive"},{"extension":".jpg","description":"JPEG images","mime":"image/jpeg"},{"extension":".json","description":"JSON format","mime":"application/json"},{"extension":".jsonld","description":"JSON-LD format","mime":"application/ld+json"},{"extension":".midi","description":"Musical Instrument Digital Interface (MIDI)","mime":"audio/midi audio/x-midi"},{"extension":".mjs","description":"JavaScript module","mime":"text/javascript"},{"extension":".mp3","description":"MP3 audio","mime":"audio/mpeg"},{"extension":".mpeg","description":"MPEG Video","mime":"video/mpeg"},{"extension":".mpkg","description":"Apple Installer Package","mime":"application/vnd.apple.installer+xml"},{"extension":".odp","description":"OpenDocument presentation document","mime":"application/vnd.oasis.opendocument.presentation"},{"extension":".ods","description":"OpenDocument spreadsheet document","mime":"application/vnd.oasis.opendocument.spreadsheet"},{"extension":".odt","description":"OpenDocument text document","mime":"application/vnd.oasis.opendocument.text"},{"extension":".oga","description":"OGG audio","mime":"audio/ogg"},{"extension":".ogv","description":"OGG video","mime":"video/ogg"},{"extension":".ogx","description":"OGG","mime":"application/ogg"},{"extension":".opus","description":"Opus audio","mime":"audio/opus"},{"extension":".otf","description":"OpenType font","mime":"font/otf"},{"extension":".png","description":"Portable Network Graphics","mime":"image/png"},{"extension":".pdf","description":"Adobe Portable Document Format (PDF)","mime":"application/pdf"},{"extension":".php","description":"Hypertext Preprocessor (Personal Home Page)","mime":"application/x-httpd-php"},{"extension":".ppt","description":"Microsoft PowerPoint","mime":"application/vnd.ms-powerpoint"},{"extension":".pptx","description":"Microsoft PowerPoint (OpenXML)","mime":"application/vnd.openxmlformats-officedocument.presentationml.presentation"},{"extension":".rar","description":"RAR archive","mime":"application/vnd.rar"},{"extension":".rtf","description":"Rich Text Format (RTF)","mime":"application/rtf"},{"extension":".sh","description":"Bourne shell script","mime":"application/x-sh"},{"extension":".svg","description":"Scalable Vector Graphics (SVG)","mime":"image/svg+xml"},{"extension":".swf","description":"Small web format (SWF) or Adobe Flash document","mime":"application/x-shockwave-flash"},{"extension":".tar","description":"Tape Archive (TAR)","mime":"application/x-tar"},{"extension":".tiff","description":"Tagged Image File Format (TIFF)","mime":"image/tiff"},{"extension":".ts","description":"MPEG transport stream","mime":"video/mp2t"},{"extension":".ttf","description":"TrueType Font","mime":"font/ttf"},{"extension":".txt","description":"Text, (generally ASCII or ISO 8859-n)","mime":"text/plain"},{"extension":".vsd","description":"Microsoft Visio","mime":"application/vnd.visio"},{"extension":".wav","description":"Waveform Audio Format","mime":"audio/wav"},{"extension":".weba","description":"WEBM audio","mime":"audio/webm"},{"extension":".webm","description":"WEBM video","mime":"video/webm"},{"extension":".webp","description":"WEBP image","mime":"image/webp"},{"extension":".woff","description":"Web Open Font Format (WOFF)","mime":"font/woff"},{"extension":".woff2","description":"Web Open Font Format (WOFF)","mime":"font/woff2"},{"extension":".xhtml","description":"XHTML","mime":"application/xhtml+xml"},{"extension":".xls","description":"Microsoft Excel","mime":"application/vnd.ms-excel"},{"extension":".xlsx","description":"Microsoft Excel (OpenXML)","mime":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},{"extension":".xml","description":"XML","mime":"application/xml if not readable from casual users (RFC 3023, section 3)"},{"extension":".xul","description":"XUL","mime":"application/vnd.mozilla.xul+xml"},{"extension":".zip","description":"ZIP archive","mime":"application/zip"},{"extension":".3gp","description":"3GPP audio/video container","mime":"video/3gpp"},{"extension":".3g2","description":"3GPP2 audio/video container","mime":"video/3gpp2"},{"extension":".7z","description":"7-zip archive","mime":"application/x-7z-compressed"}];

private headers = ["A-IM","Accept","Accept-Charset","Accept-Datetime","Accept-Encoding","Accept-Language","Accept-Ranges","Access-Control-Allow-Credentials","Access-Control-Allow-Methods","Access-Control-Allow-Origin","Access-Control-Expose-Headers","Access-Control-Max-Age","Access-Control-Request-Method","Age","Allow","Authorization","Cache-Control","Connection","Content-Encoding","Content-Language","Content-Length","Content-Location","Content-Range","Content-Security-Policy","Content-Type","Cookie","Date","Delta-Base","ETag","Expect","Expires","Forwarded","From","Host","IM","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Last-Modified","Link","Location","Max-Forwards","Permanent","Pragma","Proxy-Authenticate","Proxy-Authorization","Range","Referer ","Refresh","Retry-After","Save-Data","Server","Set-Cookie","Status","Strict-Transport-Security","TE","Timing-Allow-Origin","Tk","Trailer","Transfer-Encoding","Upgrade","User-Agent","Vary","Via","WWW-Authenticate","Warning","X-Content-Security-Policy","X-Request-ID","X-Requested-With"];

private status_codes = [{"code":100,"description":" Continue"},{"code":101,"description":" Switching Protocols"},{"code":102,"description":" Processing"},{"code":200,"description":" OK"},{"code":201,"description":" Created"},{"code":202,"description":" Accepted"},{"code":203,"description":" Non-authoritative Information"},{"code":204,"description":" No Content"},{"code":205,"description":" Reset Content"},{"code":206,"description":" Partial Content"},{"code":207,"description":" Multi-Status"},{"code":208,"description":" Already Reported"},{"code":226,"description":" IM Used"},{"code":300,"description":" Multiple Choices"},{"code":301,"description":" Moved Permanently"},{"code":302,"description":" Found"},{"code":303,"description":" See Other"},{"code":304,"description":" Not Modified"},{"code":305,"description":" Use Proxy"},{"code":307,"description":" Temporary Redirect"},{"code":308,"description":" Permanent Redirect"},{"code":400,"description":" Bad Request"},{"code":401,"description":" Unauthorized"},{"code":402,"description":" Payment Required"},{"code":403,"description":" Forbidden"},{"code":404,"description":" Not Found"},{"code":405,"description":" Method Not Allowed"},{"code":406,"description":" Not Acceptable"},{"code":407,"description":" Proxy Authentication Required"},{"code":408,"description":" Request Timeout"},{"code":409,"description":" Conflict"},{"code":410,"description":" Gone"},{"code":411,"description":" Length Required"},{"code":412,"description":" Precondition Failed"},{"code":413,"description":" Payload Too Large"},{"code":414,"description":" Request-URI Too Long"},{"code":415,"description":" Unsupported Media Type"},{"code":416,"description":" Requested Range Not Satisfiable"},{"code":417,"description":" Expectation Failed"},{"code":418,"description":" I'm a teapot"},{"code":421,"description":" Misdirected Request"},{"code":422,"description":" Unprocessable Entity"},{"code":423,"description":" Locked"},{"code":424,"description":" Failed Dependency"},{"code":426,"description":" Upgrade Required"},{"code":428,"description":" Precondition Required"},{"code":429,"description":" Too Many Requests"},{"code":431,"description":" Request Header Fields Too Large"},{"code":444,"description":" Connection Closed Without Response"},{"code":451,"description":" Unavailable For Legal Reasons"},{"code":499,"description":" Client Closed Request"},{"code":500,"description":" Internal Server Error"},{"code":501,"description":" Not Implemented"},{"code":502,"description":" Bad Gateway"},{"code":503,"description":" Service Unavailable"},{"code":504,"description":" Gateway Timeout"},{"code":505,"description":" HTTP Version Not Supported"},{"code":506,"description":" Variant Also Negotiates"},{"code":507,"description":" Insufficient Storage"},{"code":508,"description":" Loop Detected"},{"code":510,"description":" Not Extended"},{"code":511,"description":" Network Authentication Required"},{"code":599,"description":" Network Connect Timeout Error"}];

constructor() { }

  MimeTypes(): MimeType[]
  {
    return this.mime_types.slice();
  }

  Headers(): string[]{
    return this.headers.slice();
  }

  StatusCodes() : StatusCode[]
  {
    return this.status_codes.slice();
  }

}