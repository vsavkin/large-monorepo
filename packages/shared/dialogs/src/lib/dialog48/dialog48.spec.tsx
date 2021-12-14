import { render } from '@testing-library/react';

import Dialog48 from './dialog48';

describe('Dialog48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog48 />);
    expect(baseElement).toBeTruthy();
  });
});
