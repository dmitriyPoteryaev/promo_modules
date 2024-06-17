
export const defineIdApp = (id: string | undefined) => {
  
    const numberChartInString = id?.length ? id.length - 1 : 0;
    
    const lastChar = id?.[numberChartInString];
    
    const  IdApplication = lastChar;

   return IdApplication;

}
