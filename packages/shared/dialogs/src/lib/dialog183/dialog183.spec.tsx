import { render } from '@testing-library/react';

import Dialog183 from './dialog183';

describe('Dialog183', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog183 />);
    expect(baseElement).toBeTruthy();
  });
});
