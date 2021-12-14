import { render } from '@testing-library/react';

import Icon163 from './icon163';

describe('Icon163', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon163 />);
    expect(baseElement).toBeTruthy();
  });
});
