
function parsePartCode(code){

    code = code.trim()
    let firstSegment = code.indexOf(":");
    let secondSegment = code.indexOf("-");
    
    
        let sections = {
            supplierCode: getSupplier(code,firstSegment),
            productNumber: getProductNumber(code,firstSegment,secondSegment),
            size: getSize(code,secondSegment)
        }
     
     console.log(`Supplier: ${sections.supplierCode} Product Number: ${sections.productNumber} Size: ${sections.size}`)  
 
    }
    
    function getSupplier(code,firstSegment){
        
        return code.substring(0,firstSegment);
    
    }
    
    function getProductNumber(code,firstSegment,secondSegment){
        
        return code.substring(firstSegment + 1,secondSegment);
    }
    function getSize(code,secondSegment){
      
        return code.substring(secondSegment + 1);
    }
    
    parsePartCode("     ACME:123-L    ")