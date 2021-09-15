import React from 'react'

import {BuilderComponent, builder, Builder} from '@builder.io/react'

builder.init('5bf27fc0114645cbb1e474b1d6905750')

const CatchAllPage = () => {
  const [pageJson, setPage] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const isEditingOrPreviewing = Builder.isEditing || Builder.isPreviewing;

  React.useEffect(() => {
    if (!isEditingOrPreviewing) {
      fetchPage();
    }
    async function fetchPage() {
      setLoading(true);
      const content = await builder.get('page', {url: window.location.pathname})
      setPage(content)
      setLoading(false);
    }
  }, [])

  if (loading) {
    return <p>Loading</p>
  }
  if (!pageJson?.value && !isEditingOrPreviewing) {
    return <p>Not found</p>
  }
  return <BuilderComponent model="page" content={pageJson} />

}

export default CatchAllPage
