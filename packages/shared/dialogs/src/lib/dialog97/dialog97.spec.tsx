import { render } from '@testing-library/react';

import Dialog97 from './dialog97';

describe('Dialog97', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog97 />);
    expect(baseElement).toBeTruthy();
  });
});
