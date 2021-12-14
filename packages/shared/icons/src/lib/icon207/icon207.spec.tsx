import { render } from '@testing-library/react';

import Icon207 from './icon207';

describe('Icon207', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon207 />);
    expect(baseElement).toBeTruthy();
  });
});
