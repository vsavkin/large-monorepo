import { render } from '@testing-library/react';

import Alert29 from './alert29';

describe('Alert29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert29 />);
    expect(baseElement).toBeTruthy();
  });
});
