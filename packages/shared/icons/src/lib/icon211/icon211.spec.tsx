import { render } from '@testing-library/react';

import Icon211 from './icon211';

describe('Icon211', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon211 />);
    expect(baseElement).toBeTruthy();
  });
});
