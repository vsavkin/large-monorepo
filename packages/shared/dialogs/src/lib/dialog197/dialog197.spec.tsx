import { render } from '@testing-library/react';

import Dialog197 from './dialog197';

describe('Dialog197', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog197 />);
    expect(baseElement).toBeTruthy();
  });
});
