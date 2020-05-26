export const getCurrentPage= ()=>{
  const pageId = window.location.href.substr(-1);
  return pageId;
}
