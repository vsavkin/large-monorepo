import { render } from '@testing-library/react';

import Alert113 from './alert113';

describe('Alert113', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert113 />);
    expect(baseElement).toBeTruthy();
  });
});
