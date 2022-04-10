import React, { useContext, createContext, useState, FunctionComponent } from 'react'

import {IBannerProvider} from '../../types'

const BannerContext = createContext({})

export const BannerProvider:FunctionComponent<IBannerProvider> = ({ children, contents }) => {
  const [bannersCountdownFormated, setBannersCountdownFormated] = useState(
    contents
      ? contents.filter((banner:any) => {
          const currentDate = (date: any) => {
            const [day, month, year] = date.split('/');
            return ([month, day, year].join('/'));
          }
          const {
            initialDate,
            finishDate,
          } = banner
          const now = new Date()
          const formatedInitialDate = new Date(currentDate(initialDate))
          const formatedFinalDate = new Date(currentDate(finishDate))
          const validInitialDate = formatedInitialDate <= now
          const validFinalDate = formatedFinalDate >= now

          if (
            !validInitialDate ||
            !validFinalDate 
          )
            return false

          return true
        })
      : []
  )

  const filterState = (index: number) => {
    const copyArray = [...bannersCountdownFormated]
    copyArray.splice(index, 1)
    setBannersCountdownFormated(copyArray)
  }

  return (
    <BannerContext.Provider
      value={{
        bannersCountdownFormated,
        filterState,
      }}
    >
      {children}
    </BannerContext.Provider>
  )
}

export const useBanner = () => useContext(BannerContext)
