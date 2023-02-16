import clsx from 'clsx'
import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { useReducer } from 'react'
import { Button } from './Button'

type PostProps = {
  comments?: number
  shares?: number
  likes?: number
  liked?: boolean
  shared?: boolean
  commentCount?: number
}

type PostState = {
  userLiked: boolean
  userShared: boolean
  userCommentCount: number
  likeCount: number
  shareCount: number
  commentCount: number
}

type DispatchAction = 'TOGGLE_LIKE' | 'ADD_COMMENT' | 'TOGGLE_SHARE'

export function Post({
  comments = 0,
  shares = 0,
  likes = 0,
  liked = false,
  shared = false,
  commentCount = 0,
}: PostProps) {
  const [state, dispatch] = useReducer(
    (oldState: PostState, action: DispatchAction) => {
      switch (action) {
        case 'TOGGLE_LIKE': {
          return {
            ...oldState,
            userLiked: !oldState.userLiked,
            likeCount: oldState.userLiked
              ? oldState.likeCount - 1
              : oldState.likeCount + 1,
          }
        }
        case 'TOGGLE_SHARE': {
          return {
            ...oldState,
            userShared: !oldState.userShared,
            shareCount: oldState.userShared
              ? oldState.shareCount - 1
              : oldState.shareCount + 1,
          }
        }
        case 'ADD_COMMENT': {
          return {
            ...oldState,
            commentCount: oldState.commentCount + 1,
          }
        }
        default:
          return oldState
      }
    },
    {
      userLiked: liked,
      userShared: shared,
      userCommentCount: commentCount,
      likeCount: likes,
      shareCount: shares,
      commentCount: comments,
    }
  )

  function toggleLike() {
    dispatch('TOGGLE_LIKE')
  }

  function toggleShare() {
    dispatch('TOGGLE_SHARE')
  }

  function addComment() {
    dispatch('ADD_COMMENT')
  }

  const { format } = new Intl.NumberFormat('en-US', { notation: 'compact' })

  return (
    <div className="bg-main-100 rounded-lg p-2 min-w-[320px] w-full max-w-[500px] text-main-900">
      <div>header</div>
      <div>content</div>
      <div className="grid grid-cols-3 grid-rows-1 gap-3">
        <Button className="flex justify-center" onClick={addComment}>
          <ChatCircle size={24} /> {format(state.commentCount)}
        </Button>
        <Button className="flex justify-center" onClick={toggleShare}>
          <ArrowsClockwise
            size={24}
            className={clsx({
              'text-primary-500 group-hover:text-white': state.userShared,
            })}
          />
          {format(state.shareCount)}
        </Button>
        <Button className="flex justify-center" onClick={toggleLike}>
          <Heart
            size={24}
            className={clsx({
              'fill-primary-500 text-primary-500 group-hover:fill-main-100 dark:group-hover:fill-white transition-colors':
                state.userLiked,
            })}
            {...(state.userLiked && { weight: 'fill' })}
          />
          {format(state.likeCount)}
        </Button>
      </div>
    </div>
  )
}
