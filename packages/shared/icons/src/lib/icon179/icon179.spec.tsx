import { render } from '@testing-library/react';

import Icon179 from './icon179';

describe('Icon179', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon179 />);
    expect(baseElement).toBeTruthy();
  });
});
