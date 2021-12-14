import { render } from '@testing-library/react';

import Icon198 from './icon198';

describe('Icon198', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon198 />);
    expect(baseElement).toBeTruthy();
  });
});
