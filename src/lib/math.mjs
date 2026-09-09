export const pairs = n => Array.from({length:n},(_,a)=>Array.from({length:n-a-1},(_,k)=>[a,a+k+1])).flat();
export function unitPoints(mode){return mode==='line'?Array.from({length:7},(_,i)=>[i,0]):[[0,0],...Array.from({length:6},(_,i)=>[Math.cos(i*Math.PI/3),Math.sin(i*Math.PI/3)])];}
export const unitEdges = points => pairs(points.length).filter(([a,b])=>Math.abs(Math.hypot(points[a][0]-points[b][0],points[a][1]-points[b][1])-1)<1e-8);
export const routes = [[0,1,4],[2,3,4],[0,1,2,3]];
export const coverCounts = selected => Array.from({length:5},(_,edge)=>routes.reduce((n,r,i)=>n+(selected[i]&&r.includes(edge)?1:0),0));
export const pentagonEdges = pairs(5);
export const defaultColors = () => pentagonEdges.map(([a,b])=>b-a===1 || b-a===4 ? 0:1);
export function monoTriangles(colors){const result=[];for(let a=0;a<5;a++)for(let b=a+1;b<5;b++)for(let c=b+1;c<5;c++){const es=[[a,b],[a,c],[b,c]].map(([x,y])=>pentagonEdges.findIndex(([i,j])=>i===x&&j===y));if(es.every(e=>colors[e]===colors[es[0]]))result.push(es);}return result;}
export function lattice(scale){const result=[];for(let x=-3;x<=3;x++)for(let y=-3;y<=3;y++){const margins=[x+scale,y+scale,scale-x-y];const inside=margins.every(v=>v>1e-8);const boundary=!inside&&margins.every(v=>v>=-1e-8);result.push({x,y,kind:inside?'inside':boundary?'boundary':'outside'});}return result;}
export function toySpeed(t){if(t<0||t>=1)throw new RangeError('Time must be at least 0 and less than 1.');return t*t/(1-t);}
