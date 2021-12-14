import { render } from '@testing-library/react';

import Dialog66 from './dialog66';

describe('Dialog66', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog66 />);
    expect(baseElement).toBeTruthy();
  });
});
