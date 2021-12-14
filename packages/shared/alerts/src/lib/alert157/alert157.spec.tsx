import { render } from '@testing-library/react';

import Alert157 from './alert157';

describe('Alert157', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert157 />);
    expect(baseElement).toBeTruthy();
  });
});
