import { render } from '@testing-library/react';

import ImportantComponent136 from './important-component-136';

describe('ImportantComponent136', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent136 />);
    expect(baseElement).toBeTruthy();
  });
});
