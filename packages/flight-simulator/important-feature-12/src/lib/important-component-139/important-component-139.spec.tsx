import { render } from '@testing-library/react';

import ImportantComponent139 from './important-component-139';

describe('ImportantComponent139', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent139 />);
    expect(baseElement).toBeTruthy();
  });
});
