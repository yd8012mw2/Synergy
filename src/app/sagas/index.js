import { takeLatest, takeEvery } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { getAllPost, getMediumPosts } from './posts';
import { getAllChallenges, getChallenge } from './challenges';
import { getCalendarEvents } from './calendarEvents';
import { getAllTracks } from './tracks';
import { getEvents } from './events';
import { getJobs } from './jobs';
import { getPartners } from './partners';
import { getFaqs } from './faqs';

// main saga generators
export default function* sagas() {
  yield [fork(takeLatest, 'GET_POSTS', getAllPost)];
  yield [fork(takeLatest, 'GET_MEDIUM_POSTS', getMediumPosts)];
  yield [fork(takeEvery, 'GET_CHALLENGES', getAllChallenges)];
  yield [fork(takeEvery, 'GET_CHALLENGE', getChallenge)];
  yield [fork(takeEvery, 'GET_CALENDAREVENTS', getCalendarEvents)];
  yield [fork(takeLatest, 'GET_TRACKS', getAllTracks)];
  yield [fork(takeLatest, 'GET_EVENTS', getEvents)];
  yield [fork(takeLatest, 'GET_JOBS', getJobs)];
  yield [fork(takeLatest, 'GET_PARTNERS', getPartners)];
  yield [fork(takeLatest, 'GET_FAQS', getFaqs)];
}
