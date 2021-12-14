import { render } from '@testing-library/react';

import Dialog24 from './dialog24';

describe('Dialog24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog24 />);
    expect(baseElement).toBeTruthy();
  });
});
