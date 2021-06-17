// __tests__/FileSummarizer-test.js
'use strict';

jest.mock('fs');

describe('listFilesInDirectoryAsync', () => {
  const MOCK_FILE_INFO = {
    './test/pruebas/prueba.md': 'console.log("prueba contents");',
    './test/pruebas/prueba.md': 'prueba2 contents',
  };

  beforeEach(() => {
    // Set up some mocked out file info before each test
    require('fs').__setMockFiles(MOCK_FILE_INFO);
  });

  test('includes all files in the directory in the summary', () => {
    const FileSummarizer = require('./prueba');
    const fileSummary =
      FileSummarizer.summarizeFilesInDirectoryAsync('/path/to');

    expect(fileSummary.length).toBe(2);
  });
});