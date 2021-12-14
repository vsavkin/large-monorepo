import { render } from '@testing-library/react';

import Icon157 from './icon157';

describe('Icon157', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon157 />);
    expect(baseElement).toBeTruthy();
  });
});
