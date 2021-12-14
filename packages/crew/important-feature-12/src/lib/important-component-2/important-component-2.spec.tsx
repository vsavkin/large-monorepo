import { render } from '@testing-library/react';

import ImportantComponent2 from './important-component-2';

describe('ImportantComponent2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent2 />);
    expect(baseElement).toBeTruthy();
  });
});
