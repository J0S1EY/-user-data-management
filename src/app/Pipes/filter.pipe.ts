import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(userList: any[], searchString: string, propname: string): any[] {

    const searchList: any = []

    if (! userList || searchString == ' ' || propname == ' ') {
      return userList

    }
    userList.forEach((searchData: any) => {
      if (searchData [propname] .toLowerCase() .includes(searchString .toLowerCase())) {
        searchList.push(searchData)
      }
    })

    return searchList
  }

}
