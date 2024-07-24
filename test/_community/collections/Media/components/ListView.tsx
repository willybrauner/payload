'use client'

import type { CollectionComponentMap } from '@payloadcms/ui/utilities/buildComponentMap'

import { getTranslation } from '@payloadcms/translations'
import {
  Button,
  DeleteMany,
  EditMany,
  Gutter,
  ListControls,
  ListSelection,
  Pagination,
  PerPage,
  Pill,
  PublishMany,
  RelationshipProvider,
  SelectionProvider,
  SetViewActions,
  UnpublishMany,
  useComponentMap,
  useConfig,
  useEditDepth,
  useListInfo,
  useListQuery,
  useSearchParams,
  useStepNav,
  useTableColumns,
  useTranslation,
  useWindowInfo,
} from '@payloadcms/ui'
import Image from 'next/image'
import LinkImport from 'next/link'
import { useRouter } from 'next/navigation'
import { formatFilesize, isNumber } from 'payload/shared'
import React, { Fragment, useEffect } from 'react'

//import { useTableColumns } from '@payloadcms/ui/dist/elements/TableColumns/index.js'
//import { useTableColumns } from '../../../../../packages/ui/src/elements/TableColumns'
import css from './ListView.module.scss'

const baseClass = 'collection-list'
// @ts-expect-error
const Link = (LinkImport.default || LinkImport) as unknown as typeof LinkImport.default

const cls = (...rest) => rest.filter(Boolean).join(' ')

/**
 * List view
 * @constructor
 */
export const ListView: React.FC = () => {
  const router = useRouter()

  const { Header, collectionSlug, hasCreatePermission, newDocumentURL } = useListInfo()
  const { data, defaultLimit, handlePageChange, handlePerPageChange } = useListQuery()
  const { searchParams } = useSearchParams()
  const config = useConfig()
  const { getComponentMap } = useComponentMap()
  const componentMap = getComponentMap({ collectionSlug }) as CollectionComponentMap

  const { AfterList, AfterListTable, BeforeList, Description, actionsMap, fieldMap } =
    componentMap || {}

  const collectionConfig = config.collections.find(
    (collection) => collection.slug === collectionSlug,
  ) as any

  const { labels } = collectionConfig
  const { i18n } = useTranslation()
  const drawerDepth = useEditDepth()
  const { setStepNav } = useStepNav()

  const {
    breakpoints: { s: smallBreak },
  } = useWindowInfo()

  //const drawer = useListDrawer()

  let docs = data.docs || []

  if (collectionConfig!.upload) {
    // @ts-expect-error
    docs = docs?.map((doc) => {
      return {
        ...doc,
        filesize: formatFilesize(doc.filesize),
      }
    })
  }

  useEffect(() => {
    if (drawerDepth <= 1) {
      setStepNav([
        {
          label: labels?.plural,
        },
      ])
    }
  }, [setStepNav, labels, drawerDepth])

  const tableColumns = useTableColumns()
  const itemClicked = (e) => {
    const onClick = tableColumns.columns[0].cellProps?.onClick
    if (typeof onClick === 'function') {
      onClick?.({
        cellData: undefined,
        collectionSlug: e,
        rowData: e,
      })
    } else {
      console.log('onClick doesnt exist, push the new route')
      void router.push(`${collectionSlug}/${e.id}`)
    }
  }

  return (
    <div className={baseClass}>
      <SetViewActions actions={actionsMap?.List} />
      {BeforeList}
      <SelectionProvider docs={data.docs} totalDocs={data.totalDocs}>
        <Gutter className={`${baseClass}__wrap`}>
          <header className={`${baseClass}__header`}>
            {Header || (
              <Fragment>
                <h1>{getTranslation(labels?.plural, i18n)}</h1>
                {hasCreatePermission && (
                  <Pill
                    aria-label={i18n.t('general:createNewLabel', {
                      label: getTranslation(labels?.singular, i18n),
                    })}
                    to={newDocumentURL}
                  >
                    {i18n.t('general:createNew')}
                  </Pill>
                )}
                {!smallBreak && (
                  <ListSelection
                    label={getTranslation(collectionConfig.labels.plural, i18n) as string}
                  />
                )}
                {Description && <div className={`${baseClass}__sub-header`}>{Description}</div>}
              </Fragment>
            )}
          </header>

          {/* SEARCH ------------------------------------------------------------ */}

          <ListControls collectionConfig={collectionConfig} fieldMap={fieldMap} />

          {/* LIST ------------------------------------------------------------ */}

          <div className={css.list}>
            {data.docs && data.docs.length > 0 && (
              <RelationshipProvider>
                {docs.map((e, i) => (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                  <div className={css.item} key={i} onClick={() => itemClicked(e)}>
                    <div className={css.thumb}>
                      {e.mimeType.startsWith('image') && (
                        <Image
                          alt={e.alt || 'alt'}
                          className={cls(css.media, css[`media_${e.orientation}`])}
                          height={e.height}
                          src={e.url}
                          width={e.width}
                        />
                      )}
                      {e.mimeType.startsWith('video') && (
                        <video
                          autoPlay={true}
                          className={cls(css.media, css[`media_${e.orientation}`])}
                          loop={true}
                          muted={true}
                          src={e.url}
                        />
                      )}
                    </div>
                    <div className={css.itemInfos}>
                      <div className={css.filename}>{e.filename}</div>
                    </div>
                  </div>
                ))}
              </RelationshipProvider>
            )}
          </div>

          {/* PAGINATION ------------------------------------------------------------ */}

          {data.docs && data.docs.length === 0 && (
            <div className={`${baseClass}__no-results`}>
              <p>{i18n.t('general:noResults', { label: getTranslation(labels?.plural, i18n) })}</p>
              {hasCreatePermission && newDocumentURL && (
                <Button Link={Link} el="link" to={newDocumentURL}>
                  {i18n.t('general:createNewLabel', {
                    label: getTranslation(labels?.singular, i18n),
                  })}
                </Button>
              )}
            </div>
          )}
          {AfterListTable}
          {data.docs && data.docs.length > 0 && (
            <div className={`${baseClass}__page-controls`}>
              <Pagination
                hasNextPage={data.hasNextPage}
                hasPrevPage={data.hasPrevPage}
                limit={data.limit}
                nextPage={data.nextPage}
                numberOfNeighbors={1}
                onChange={handlePageChange}
                page={data.page}
                prevPage={data.prevPage}
                totalPages={data.totalPages}
              />
              {data?.totalDocs > 0 && (
                <Fragment>
                  <div className={`${baseClass}__page-info`}>
                    {data.page * data.limit - (data.limit - 1)}-
                    {data.totalPages > 1 && data.totalPages !== data.page
                      ? data.limit * data.page
                      : data.totalDocs}{' '}
                    {i18n.t('general:of')} {data.totalDocs}
                  </div>
                  <PerPage
                    handleChange={handlePerPageChange}
                    limit={
                      isNumber(searchParams?.limit) ? Number(searchParams.limit) : defaultLimit
                    }
                    limits={collectionConfig?.admin?.pagination?.limits as number[]}
                    resetPage={data.totalDocs <= data.pagingCounter}
                  />
                  {smallBreak && (
                    <div className={`${baseClass}__list-selection`}>
                      <Fragment>
                        <ListSelection
                          label={getTranslation(collectionConfig.labels.plural, i18n) as string}
                        />
                        <div className={`${baseClass}__list-selection-actions`}>
                          <EditMany collection={collectionConfig} fieldMap={fieldMap} />
                          <PublishMany collection={collectionConfig} />
                          <UnpublishMany collection={collectionConfig} />
                          <DeleteMany collection={collectionConfig} />
                        </div>
                      </Fragment>
                    </div>
                  )}
                </Fragment>
              )}
            </div>
          )}
        </Gutter>
      </SelectionProvider>
      {AfterList}
    </div>
  )
}
