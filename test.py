import sys, urllib, urllib2, json, cookielib, time, os.path, hashlib
import parsedom

# import xbmc, xbmcgui, xbmcplugin, xbmcaddon
# from operator import itemgetter
parseDOM = parsedom.parseDOM
# import CommonFunctions
# common = CommonFunctions
# thisAddon = xbmcaddon.Addon()
# common.plugin = thisAddon.getAddonInfo('name')

baseUrl = 'http://tfc.tv';
userAgent = 'Mozilla/5.0(iPad; U; CPU OS 4_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8F191 Safari/6533.18.5'
def riki():
    baseUrl = 'http://tfc.tv';
    print "Hello, Python!",baseUrl;

# riki();
cookieJar = cookielib.CookieJar()
# print "Hello, cooke!",cookieJar;


def pars():
    link_html = "<a href='bla.html' class='riki' id='test'>Link Test</a>"
    ret = parseDOM(link_html, "a", attrs= {"href":"bla.html"},ret="class");
    print repr(ret) # Prints ['bla.html']
# pars();


def callServiceApi(path, params = {}, headers = [], base_url = baseUrl):
    opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cookieJar))

    headers.append(('Cookie', ".TFCTV=FC975A5A90151CFA2868D70BFE9F11FF5A00DE0B9736C6984A03C7E28DEEC56532A4978761CEF1AACDE5F278A0B444A3961D3D81B5029C14C65DCDFBEB81BC1FF0C669F31D555134507341151FACCAAC8895AD024E73DC55EEEED662F4B7B4A901E177935120F1E21E58C0781A8A77108297652AB2006C60675EFA78ED12695443DFA564B03A03E253A037A3E781A897D6557A1D31DFC26315F5268ED84A6C5932361AF088D1CBA7A607050F8D687AF7E8546418; __cfduid=da4d1f6d98f59b1fb5227928c9061d76b1481312063; optimizelyEndUserId=oeu1481312063875r0.6144768789276718; __gads=ID=9be238905ef96833:T=1481312064:S=ALNI_MbXONQz3_1koOfFaLgFvLV_mBsW9A; regcook=274fa181-bad2-4099-af5f-fb383a56491a; __RequestVerificationToken=zrCszCF8No0H4ZR7nflRkEsEcQ4EYrNof73LZXyontCvUX5onfnZ8qq3hk90feGll1hRzQOXRsrQtYT4SWTEd_wZic8QSQDJTafccROW1kBcJ_qNWRds391DFH0lmx6CChrTTQ2; rcDate=Fri, 09 Dec 2016 20:35:37 GMT; glt_2_6Y5KLYxUvG2qbK6AoEjHQIISiJvj99Li5cluBktSMTIrFPU2T3DRC8Iz_r0xRiNE=LT3_DjgKcci_q5RhQPypQpTVB_1AgGo67m2ERZcXxNKBYJ0%7CUUID%3Dc81a1a1dffb641749c603b817168a4b8; optmzl=3; optimizelySegments=%7B%221755021167%22%3A%22false%22%2C%221766442549%22%3A%22direct%22%2C%221774641359%22%3A%22gc%22%7D; optimizelyBuckets=%7B%7D; _ceg.s=ohxqxk; _ceg.u=ohxqxk; _dc_gtm_UA-2265816-2=1; _ga=GA1.2.658898550.1481312065; _em_t=true; _em_vt=42afcb0ba1527f919b1733ab7a6a584b07411f1340-25949054584b1799; _em_v=7d29cbe57b2b1de31b12d5926127584b14fe6e6b81-40934826584b1799"))
    headers.append(('User-Agent',userAgent))
    opener.addheaders = headers
    if params:
        data_encoded = urllib.urlencode(params)
        response = opener.open(base_url + path, data_encoded)
    else:
        response = opener.open(base_url + path)
    return response.read();


page = callServiceApi('/Show/Details/612/100-days-to-heaven');
# print page, "This is the output";
login = parseDOM(page,"a",attrs={"href":"/User/Register"})
print " Am I login?" , page
# <a href="/User/Register">
# <button type="button" class="btn btn-danger red_button">
# start your free trial
# </button>
# </a>


# curl 'http://tfc.tv/Show/Details/612/100-days-to-heaven' -H 'DNT: 1' -H 'Accept-Encoding: gzip, deflate, sdch' -H 'Accept-Language: en-US,en;q=0.8,af;q=0.6' -H 'Upgrade-Insecure-Requests: 1' 
# -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36' 
# -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' 
# -H 'Cache-Control: max-age=0' -H 'Cookie: .TFCTV=FC975A5A90151CFA2868D70BFE9F11FF5A00DE0B9736C6984A03C7E28DEEC56532A4978761CEF1AACDE5F278A0B444A3961D3D81B5029C14C65DCDFBEB81BC1FF0C669F31D555134507341151FACCAAC8895AD024E73DC55EEEED662F4B7B4A901E177935120F1E21E58C0781A8A77108297652AB2006C60675EFA78ED12695443DFA564B03A03E253A037A3E781A897D6557A1D31DFC26315F5268ED84A6C5932361AF088D1CBA7A607050F8D687AF7E8546418; __cfduid=da4d1f6d98f59b1fb5227928c9061d76b1481312063; optimizelyEndUserId=oeu1481312063875r0.6144768789276718; __gads=ID=9be238905ef96833:T=1481312064:S=ALNI_MbXONQz3_1koOfFaLgFvLV_mBsW9A; regcook=274fa181-bad2-4099-af5f-fb383a56491a; __RequestVerificationToken=zrCszCF8No0H4ZR7nflRkEsEcQ4EYrNof73LZXyontCvUX5onfnZ8qq3hk90feGll1hRzQOXRsrQtYT4SWTEd_wZic8QSQDJTafccROW1kBcJ_qNWRds391DFH0lmx6CChrTTQ2; rcDate=Fri, 09 Dec 2016 20:35:37 GMT; glt_2_6Y5KLYxUvG2qbK6AoEjHQIISiJvj99Li5cluBktSMTIrFPU2T3DRC8Iz_r0xRiNE=LT3_DjgKcci_q5RhQPypQpTVB_1AgGo67m2ERZcXxNKBYJ0%7CUUID%3Dc81a1a1dffb641749c603b817168a4b8; optmzl=3; optimizelySegments=%7B%221755021167%22%3A%22false%22%2C%221766442549%22%3A%22direct%22%2C%221774641359%22%3A%22gc%22%7D; optimizelyBuckets=%7B%7D; _ceg.s=ohxqxk; _ceg.u=ohxqxk; _dc_gtm_UA-2265816-2=1; _ga=GA1.2.658898550.1481312065; _em_t=true; _em_vt=42afcb0ba1527f919b1733ab7a6a584b07411f1340-25949054584b1799; _em_v=7d29cbe57b2b1de31b12d5926127584b14fe6e6b81-40934826584b1799' -H 'Connection: keep-alive' --compressed
