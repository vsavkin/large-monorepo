import { render } from '@testing-library/react';

import ImportantComponent147 from './important-component-147';

describe('ImportantComponent147', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent147 />);
    expect(baseElement).toBeTruthy();
  });
});
