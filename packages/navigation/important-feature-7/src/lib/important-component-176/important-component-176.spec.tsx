import { render } from '@testing-library/react';

import ImportantComponent176 from './important-component-176';

describe('ImportantComponent176', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent176 />);
    expect(baseElement).toBeTruthy();
  });
});
